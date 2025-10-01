---
PromptInfo:
 id: custom
 name: ⭐ Write a custom prompt
 description: 
 version: 0.0.1
---
content: 
{{#each children}}
{{this.content}}
{{/each}}
{{context}}

prompt:
Refer to the last line of context for your prompt.