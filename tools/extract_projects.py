import os
import textwrap
import requests
import sys
import json
import re

from datetime import datetime
from yaml import load, CLoader


LANGS = []
LABURL = 'https://oklabflensburg.de'
VERSION = 0.1
NAME = 'Projekte - OK Lab Flensburg'


# categories: must be in sync with globals site
# currently we have umwelt, politik, gesellschaft, mobilität
# if no key present, default to all
# DEFAULT_CATEGORIES = ['environment', 'politics', 'society', 'mobility']
DEFAULT_CATEGORIES = ['umwelt', 'politik', 'gesellschaft', 'mobilität']

# Status should be one of active, completed, archived. Default is completed
DEFAULT_STATUS = 'completed'

projects = []

prjdir = f'./codefor.de/content/projekte'
files = os.listdir(prjdir)

for fl in files:
    if not re.match(r'\d{4}-\d{2}-\d{2}-fl-', fl):
        continue
        
    with open(os.sep.join([prjdir,fl])) as f:
        # split by '---' to get yaml header
        x = f.read().split('---')
        if len(x) != 3:
            continue

        y = x[1]
        md = x[2]
        # print(md)

        yml = load(y, CLoader)
        # print(yml)

        project_url = ', '.join([a['url'] for a in yml.get('links') if a['name'] == 'Website'])

        # get project name and year from file name
        prjname = fl.split('.md')[0].split('-')
        # print(prjname)

        format_string = '%Y-%m-%d'
        timestamp_string = f'{prjname[0]}-{prjname[1]}-{prjname[2]}'
        datetime_object = datetime.strptime(timestamp_string, format_string)
        prjname = '-'.join(prjname[4:])
        # print(prjname)

        # get status or use default
        if yml.get('status') != None:
            project_status = yml['status']
        else:
            project_status = DEFAULT_STATUS

        # get categories or use default
        if yml.get('tags') != None:
            project_categories = (', ').join(yml['tags'])
        else:
            project_categories = DEFAULT_CATEGORIES

        # get image or use default
        project_image = f'{LABURL}/img/CfKA%20Hexagon%203d.svg'

        if yml.get('imgname') != None:
            source_image_file = yml['imgname'].split('/')[-1]
            project_image = f'{project_url}/static/{source_image_file}'

        # make teaser
        project_teaser = textwrap.shorten(md, width=240, placeholder='…')
        project_description = re.sub(r'([\s]{2,})|[\n]', ' ', md).strip()
        project_collaborators = ', '.join([a['name'] for a in yml.get('collaborators')])

        prj = {
            'lab': yml['lab'][0].capitalize(),
            'title': yml['title'],
            'teaser': project_teaser,
            'description': project_description,
            'year': datetime_object.year,
            'categories': project_categories,
            'collaborators': project_collaborators,
            'status': project_status,
            'link': project_url,
            'img': project_image
        }

        print(prj)
        projects.append(prj)
            

# create project list for export 
pl = {
    'name': NAME,
    'version': VERSION,
    'projects': projects
}


with open('projects.json', 'w') as f:
    json.dump(pl, f, ensure_ascii=False)
