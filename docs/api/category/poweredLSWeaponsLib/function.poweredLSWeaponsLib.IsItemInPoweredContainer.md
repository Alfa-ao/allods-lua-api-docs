# poweredLSWeaponsLib.IsItemInPoweredContainer
Проверяет наличие предмета в прокачанном оружии или экипировке аватара.

## Описание
```lua
poweredLSWeaponsLib.IsItemInPoweredContainer( itemId: ObjectId ): boolean
```
Функция проверяет наличие предмета в прокачанном оружии или экипировке аватара и возвращает соответствующее логическое значение.

## Список параметров
- **`itemId`** (`ObjectId`) - идентификатор предмета.

## Возвращаемые значения
Возвращает `boolean` - `true`, если предмет находится в прокачанном оружии или экипирован на аватаре, и `false` в противном случае.

## Примеры
### Проверка наличия предмета
```lua
local isItemInPoweredContainer = poweredLSWeaponsLib.IsItemInPoweredContainer( itemId )
```