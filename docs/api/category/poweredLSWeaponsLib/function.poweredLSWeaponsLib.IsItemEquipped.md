# poweredLSWeaponsLib.IsItemEquipped
Определяет факт экипировки указанного или аналогичного предмета на персонажа.

## Описание
```lua
poweredLSWeaponsLib.IsItemEquipped( itemId: ObjectId ): boolean
```
Функция возвращает логическое значение, указывающее на наличие предмета с заданным идентификатором или его аналога в экипировке персонажа.

## Список параметров
- **`itemId`** (`ObjectId`) - Уникальный идентификатор предмета.

## Возвращаемые значения
Возвращает `boolean` - `true`, если предмет надет на персонажа, и `false` в противном случае.

## Примеры
### Проверка наличия предмета в экипировке
```lua
local isItemEquipped = poweredLSWeaponsLib.IsItemEquipped( itemId )
```