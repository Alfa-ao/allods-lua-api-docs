# itemLib.GetSetBonusRoot
Возвращает информацию о всех доступных в игре сетовых бонусах.

## Описание
```lua
itemLib.GetSetBonusRoot(): table | nil
```

Функция возвращает информацию о всех доступных в игре сетовых бонусах.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` | `nil` - список, индексированный с 1, каждый элемент которого представляет собой таблицу со следующими полями:

- **`name`** (`WString`) - название сетового бонуса.

- **`description`** (`ValuedText`) - описание сетового бонуса.

- **`loreDescription`** (`WString`) - художественное описание сетового бонуса.

- **`sourceDescription`** (`GlossaryId`) - идентификатор ресурса для описания источника получения.

или `nil`, если информация недоступна.

## Примеры
### Получение и перебор списка сетовых бонусов
```lua
local setBonusRootInfo = itemLib.GetSetBonusRoot()
if setBonusRootInfo then
    for _, setBonusInfo in ipairs( setBonusRootInfo ) do
        LogInfo( setBonusInfo.name )
    end
end
```

## Смотрите также
- [itemLib.GetSetBonusInfo](function.itemLib.GetSetBonusInfo)
- [common.GetSetBonusInfo](function.common.GetSetBonusInfo)