# medalsLib.InspectAvatarMedals

Запрашивает информацию о достижениях другого игрока.

## Описание

```lua
medalsLib.InspectAvatarMedals( avatarId: ObjectId )
```

Функция инициирует отправку запроса на получение информации о достижениях указанного персонажа. Результат передается событием `EVENT_INSPECT_AVATAR_MEDALS_RESULT`.

## Список параметров

- **`avatarId`** (`ObjectId`) - Идентификатор персонажа игрока.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Запрос достижений персонажа

```lua
medalsLib.InspectAvatarMedals( avatarId )
```

## Смотрите также

- [EVENT_INSPECT_AVATAR_MEDALS_RESULT](events.medals#event-inspect-avatar-medals-result)