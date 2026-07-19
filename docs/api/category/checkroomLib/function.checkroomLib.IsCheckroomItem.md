# checkroomLib.IsCheckroomItem

Определяет принадлежность предмета к коллекции гардероба.

## Описание

```lua
checkroomLib.IsCheckroomItem( itemId: ObjectId ): boolean
```

Функция проверяет, является ли предмет гардеробным, и возвращает соответствующее логическое значение.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

`boolean` - `true`, если предмет является гардеробным, иначе `false`.

## Примеры

### Проверка предмета

```lua
local isCheckroomItem = checkroomLib.IsCheckroomItem( itemId )
```