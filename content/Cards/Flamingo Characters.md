
[[The Flamingos Fly|Hub]]
```dataview
table rows.file.link as Scenes
from #Flamingo/Scene 
flatten Character
group by Character 
sort Character asc
```

```dataview
table Age
from #Flamingo/Character  
```
