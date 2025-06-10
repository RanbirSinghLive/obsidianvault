---

database-plugin: basic

---

```yaml:dbfolder
name: Outline
description: new description
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 1
    isHidden: false
    sortIndex: -1
    width: 166
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: count_unique
      persist_changes: false
      wrap_content: true
      content_alignment: text-align-left
      content_vertical_alignment: align-middle
      footer_formula: 
  Character:
    input: text
    accessorKey: Character
    key: Character
    id: Character
    label: Character
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 107
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Setting:
    input: text
    accessorKey: Setting
    key: Setting
    id: Setting
    label: Setting
    position: 6
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 84
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      footer_formula: 
  Draft:
    input: number
    accessorKey: Draft
    key: Draft
    id: Draft
    label: Draft
    position: 8
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 30
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      footer_formula: 
  Date:
    input: number
    accessorKey: Date
    key: Date
    id: Date
    label: Date
    position: 7
    skipPersist: false
    isHidden: false
    sortIndex: 0
    isSorted: true
    isSortedDesc: false
    width: 106
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      footer_formula: 
  Plot1:
    input: text
    accessorKey: Plot1
    key: Plot1
    id: Plot1
    label: Plot1
    position: 9
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      footer_formula: 
  words:
    input: number
    accessorKey: words
    key: words
    id: words
    label: words
    position: 10
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: sum
      persist_changes: false
      footer_formula: 
  Ch:
    input: number
    accessorKey: Ch
    key: Ch
    id: Ch
    label: Ch
    position: 2
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 43
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Sc:
    input: number
    accessorKey: Sc
    key: Sc
    id: Sc
    label: Sc's
    position: 3
    skipPersist: false
    isHidden: false
    sortIndex: 2
    width: -213
    isSorted: true
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Bickham:
    input: text
    accessorKey: Bickham
    key: Bickham
    id: Bickham
    label: Bickham
    position: 4
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  Editing:
    input: text
    accessorKey: Editing
    key: Editing
    id: Editing
    label: Editing
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 100
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: true
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: query
  source_form_result: "from \"Cards/The Flamingos Fly\" where file.name != \"Index\""
  source_destination_path: Cards/The Flamingos Fly
  row_templates_folder: 90 Templates
  current_row_template: 90 Templates/Scene Template.md
  pagination_size: 200
  font_size: 8
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: true
  implementation: default
filters:
  enabled: true
  conditions:
```