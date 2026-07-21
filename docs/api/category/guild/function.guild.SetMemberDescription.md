# guild.SetMemberDescription

Изменяет описание игрока в гильдии.

## Описание

```lua
guild.SetMemberDescription( memberId: ObjectId, description: WString )
```

Функция изменяет текстовое описание для указанного участника гильдии.

## Список параметров

- **`memberId`** (`ObjectId`) - Идентификатор члена гильдии.

- **`description`** (`WString`) - Описание игрока.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Базовый вызов

```lua
guild.SetMemberDescription( memberId, description )
```