# mission.SetChatInputTarget

Назначает цель слеш-команды для строки ввода межсерверного взаимодействия.

## Описание

```lua
mission.SetChatInputTarget( uniqueId: UniqueId )
```

Функция назначает цель слеш-команды для строки ввода межсерверного взаимодействия.

## Список параметров

- **`uniqueId`** (`UniqueId`) - Уникальный идентификатор персонажа.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Назначение цели слеш-команды

```lua
mission.SetChatInputTarget( avatar.GetUniqueId() )
```

## Смотрите также

- [avatar.GetUniqueId](function.avatar.GetUniqueId)