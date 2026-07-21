# itemLib.CanSendByMail
Проверяет возможность передачи предмета по внутриигровой почте.

## Описание
```lua
itemLib.CanSendByMail( itemId: ObjectId ): boolean
```
Функция проверяет возможность передачи предмета по внутриигровой почте.

## Список параметров
- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения
Возвращает `boolean` - `true`, если предмет можно передавать по внутриигровой почте, иначе `false`.

## Примеры
### Проверка возможности отправки предмета
```lua
local canSendByMail = itemLib.CanSendByMail( itemId )
if canSendByMail then
    LogInfo( "Предмет можно передавать по внутриигровой почте" )
end
```