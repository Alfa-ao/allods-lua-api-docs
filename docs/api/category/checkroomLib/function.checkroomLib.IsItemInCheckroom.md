# checkroomLib.IsItemInCheckroom

Проверяет наличие предмета в гардеробе или экипировке.

## Описание

```lua
checkroomLib.IsItemInCheckroom( itemId: ObjectId ): boolean
```

Функция возвращает логическое значение, указывающее на наличие предмета в гардеробе или экипировке.

## Список параметров

- **`itemId`** (`ObjectId`) - Уникальный идентификатор предмета.

## Возвращаемые значения

Возвращает `boolean` - `true`, если предмет находится в гардеробе или экипирован, и `false` в противном случае.

## Примеры

### Проверка наличия предмета

```lua
local isItemInCheckroom = checkroomLib.IsItemInCheckroom( itemId )
```