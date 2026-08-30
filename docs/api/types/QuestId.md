# QuestId

Идентификатор задания. Один из типов группы `ResourceId`. (В настоящее время идентификатор квеста - идентификатор его ресурса в базе.)

Поля, доступные в `QuestId:GetInfo()`

```
finishText: WString - финальное описание
startText: WString - стартовое описание
goal: WString - описание рекомендации
image:TextureId - иконка
name:WString - имя
isAutomatic: boolean - true если это дейлик, иначе false
questCategory: Number(ENUM_QuestCategory) - категория квеста
```

## Смотрите также

- [ENUM_QuestCategory](/api/enums/enums.ENUM_QuestCategory.md)