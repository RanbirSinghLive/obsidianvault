---
limit: 100
mapWithTag: false
icon: film
tagNames:
  - Flamingo/Scene
excludes: 
extends: Flamingo
version: "2.22"
fields:
  - id: Cmz1Su
    name: Character
    options:
      valuesList:
        "1": "[[Happy]]"
        "2": "[[Saad]]"
        "3": "[[Jug]]"
        "4": "[[Shera]]"
        "5": "[[Ram]]"
        "6": "[[Mummi]]"
        "7": "[[Daddi]]"
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Multi
    path: ""
  - id: aEFBO5
    name: Setting
    options:
      valuesList:
        "1": "[[Ram's House]]"
        "2": "[[10 Garfella Drive]]"
        "3": "[[NACI]]"
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: KYBZGU
    name: Plot1
    options: {}
    type: MultiFile
    path: ""
  - name: Date
    type: Number
    options:
      min: 2003.01
      max: 2008.01
    path: ""
    id: pQl60n
  - name: words
    type: Number
    options:
      min: 1
      max: 500000
    path: ""
    id: GEm6dP
  - name: Draft
    type: Number
    options:
      min: 1
      max: 10
    path: ""
    id: QDfpaP
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - W4vFGn
  - QDfpaP
  - GEm6dP
  - pQl60n
  - KYBZGU
  - aEFBO5
  - Cmz1Su
---

Character:: {"type":"Multi","options":{"valuesList":{"1":"[[Happy]]","2":"[[Saad]]","3":"[[Jug]]","4":"[[Shera]]","5":"[[Ram]]","6":"[[Mummi]]","7":"[[Daddi]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}
Setting:: {"type":"Select","options":{"valuesList":{"1":"[[Ram's House]]","2":"[[10 Garfella Drivee]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}
Order:: {"type":"Number","options":{}}
Notes:: {"type":"File","options":{}}
Plotline:: {"type":"MultiFile","options":{}}
Summary:: {"type":"Input","options":{}}