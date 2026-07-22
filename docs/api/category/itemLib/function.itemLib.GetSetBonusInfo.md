# itemLib.GetSetBonusInfo

Возвращает информацию о сетовом бонусе предмета.

## Описание

```lua
itemLib.GetSetBonusInfo( itemId: ObjectId ): table|nil
```

Функция извлекает и возвращает таблицу с информацией о сетовом бонусе указанного предмета. В случае передачи некорректного идентификатора возвращается `nil`.

## Список параметров

- **`itemId`** (`ObjectId`)

Идентификатор предмета.

## Возвращаемые значения

Возвращает таблицу (`table`) с информацией о сетовом бонусе или `nil`, если идентификатор предмета некорректен.

- **`hasSetBonus`** (`boolean`) - `true`, если предмет имеет сетовой бонус.

- **`name`** (`WString` | `nil`) - Название сетового бонуса, или `nil`, если у предмета отсутствует сетовой бонус.

- **`description`** (`ValuedText` | `nil`) - Описание сетового бонуса, или `nil`, если у предмета отсутствует сетовой бонус.

- **`loreDescription`** (`WString` | `nil`) - Художественное описание сетового бонуса, или `nil`, если у предмета отсутствует сетовой бонус.

- **`sourceDescription`** (`GlossaryId` | `nil`) - Идентификатор ресурса для описания источника получения, или `nil`, если у предмета отсутствует сетовой бонус.

## Примеры

### Получение и проверка информации о сетовом бонусе

```lua
local info = itemLib.GetSetBonusInfo( itemId )
if info and info.hasSetBonus then
    LogInfo( info.name )
end
```

## Смотрите также

- [itemLib.GetSetBonusRoot](function.itemLib.GetSetBonusRoot)
- [common.GetSetBonusInfo](function.common.GetSetBonusInfo)