# Schema Information

## users
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
email | string | not null, indexed, unique
f_name | string | not null, indexed
l_name | string | not null, indexed
password_digest | string | not null
session_token | string | not null, indexed, unique
profile_image_url | string
description | text
host | boolean

## menus
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
title | string | not null
price | integer | not null, indexed
description | text | not null
address | string | not null
longitude | float | not null
latitude | float | not null
availability | date | not null
owner_id | integer | not null, foreign key (references users), indexed

## reservations
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
date | date | not null
confirmed | boolean | default false
owner_id | integer | not null, foreign key (references users), indexed
menus_id | integer | not null, foreign key (references menus), indexed

## menu_reviews
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
score | integer
body | text
menu_id | integer | not null, foreign key (references menus), indexed
owner_id | integer | not null, foreign key (references users), indexed

## host_reviews
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
score | integer
body | text
host_id | integer | not null, foreign key (references users), indexed
owner_id | integer | not null, foreign key (references users), indexed

## menu_pics
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
menu_pic_url | string | not null
menu_id | integer | not null, foreign key (references menus), indexed

## categories
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key, unique
name | string | not null

## menus_categories
column name | data type | details
:---:|:---:|:---:
id | integer | not null, primary key
category_id | integer | not null, foreign key (references categories), indexed
menus_id | integer | not null, foreign key (references menus), indexed
