---
PromptInfo:
 promptId: expand
 name: 💥 Expand
 description: Expand the selected text 
 author: Noureddine
 tags: writing
 version: 0.0.1
---
context:
{{#each children}}
{{this.content}}
{{/each}}
{{context}}
prompt:
expand the last line of context into prose using all the context
