# unit.GetOvertipTexture

Возвращает идентификатор специальной текстуры, ассоциированной с кричей, или `nil`, если таковая отсутствует.

## Описание

```lua
unit.GetOvertipTexture( unitId: ObjectId ): TextureId | nil
```

Функция извлекает идентификатор специальной текстуры, ассоциированной с кричей, которую необходимо отображать в овертипе объекта. Подробности об установке текстуры описаны в справке к функции `CreatureSetOvertipAction`.

## Список параметров

- **`unitId`** (`ObjectId`) - идентификатор игрока или моба.

## Возвращаемые значения

Возвращает `TextureId` | `nil` - идентификатор текстуры иконки для овертипа.

## Примеры

### Получение текстуры овертипа

```lua
local textureId = unit.GetOvertipTexture( unitId )
```

## Смотрите также

- [CreatureSetOvertipAction](CreatureSetOvertipAction)