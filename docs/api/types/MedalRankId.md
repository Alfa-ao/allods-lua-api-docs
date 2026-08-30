# MedalRankId

Идентификатор ресурса ранга достижения. Один из типов группы `ResourceId`. Идентификатор ресурса достижения в базе.

Поля, доступные в `MedalRankId:GetInfo()`

```
completeProgress: Number(int) - количество очков прогресса необходимых для завершения ранга
name: WString - название ранга
description: WString - описание ранга
image: TextureId - картинка ранга
score: Number(int) - количество очков за выполнение ранга
reward: table - награда, таблица с полями
description: WString - описание награды
```