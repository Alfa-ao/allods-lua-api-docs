# unit.GetCharacterForm

Возвращает текущую форму класса персонажа.

## Описание

```lua
unit.GetCharacterForm( unitId: ObjectId ): CharacterFormId | nil
```

Функция возвращает идентификатор текущей формы класса персонажа.

## Список параметров

- **`unitId`** (`ObjectId`) - идентификатор персонажа.

## Возвращаемые значения

Возвращает `CharacterFormId` | `nil` - идентификатор формы класса игрока или `nil`, если форма не определена.

## Примеры

### Получение формы класса персонажа

```lua
local characterFormId = unit.GetCharacterForm( avatar.GetId() )
if characterFormId then
    LogInfo( characterFormId:GetInfo() )
end
```

## Смотрите также

- [avatar.GetId](../avatar/function.avatar.GetId)