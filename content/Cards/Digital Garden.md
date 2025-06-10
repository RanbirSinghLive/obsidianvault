
>[!button]- Inactive Quests
>```todoist
name: Idea Bank
filter: "#Ideas" 
sorting: [date, priority]
group: true

>[!button]- Seeds
>```dataview 
TABLE WITHOUT ID
file.link as "Files"
FROM #📥
SORT file.mtime desc
LIMIT 5

>[!button] Garden
>```dataview 
TABLE length(rows.file.name) as Cards 
FROM #🌱 or #🪴 or #🌲
FLATTEN file.tags as Status 
GROUP BY Status
SORT length(rows.file.name) asc

>[!button]- Achievements
>```dataview 
TABLE WITHOUT ID
file.link AS "Most Referenced",
length(file.inlinks) AS "References"
FROM #🌱 or #🪴 or #🌲
SORT length(file.inlinks) desc
LIMIT 5

>[!button]- Legend
🌱 the beginnings of an evergreen note
🪴 an evergreen note with more structure
🌲 a bonafide evergreen note
🕸 is a MOC
📥 reference to be processed
📤 reference fully processed


