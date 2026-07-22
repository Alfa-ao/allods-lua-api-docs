# itemLib.IsSOSMessageSender
Проверяет, является ли предмет сигнальным фейерверком.

## Описание
```lua
itemLib.IsSOSMessageSender( itemId: ObjectId ): boolean
```
Функция проверяет, является ли указанный предмет сигнальным фейерверком.

## Список параметров
- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения
Возвращает `boolean` - `true`, если предмет является сигнальным фейерверком, иначе `false`.

## Примеры
### Проверка предмета
```lua
local itemIsSOSMessageSender = itemLib.IsSOSMessageSender( itemId )
```