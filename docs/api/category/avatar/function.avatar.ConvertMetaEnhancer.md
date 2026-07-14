# avatar.ConvertMetaEnhancer
Конвертирует метаитем-улучшитель в обычный предмет применением на нём предмета-инструмента.

## Описание
```lua
avatar.ConvertMetaEnhancer( itemId: ObjectId, instrumentId: ObjectId )
```
Функция инициирует процесс конвертации метапредмета-улучшителя в обычный предмет. Для выполнения операции требуется предмет-инструмент, который расходуется в процессе.

Перед вызовом функции необходимо убедиться, что указанный метапредмет действительно является улучшителем, а инструмент — специализированным конвертором. Проверка метапредмета осуществляется через функцию `avatar.GetItemMetaInfo` по наличию флага `isMetaEnchancer`. Проверка инструмента выполняется через функцию `avatar.GetItemInfo` по наличию флага `isMetaEnhancerConvertor`.

Если переданные идентификаторы не соответствуют требуемым типам предметов, команда игнорируется.

## Список параметров
- **`itemId`** (`ObjectId`)
Идентификатор конвертируемого метапредмета в контейнере. Предмет должен являться метапредметом-улучшителем, что проверяется через `avatar.GetItemMetaInfo` по флагу `isMetaEnchancer`.

- **`instrumentId`** (`ObjectId`)
Идентификатор предмета-инструмента в контейнере. Предмет должен являться специализированным конвертором, что проверяется через `avatar.GetItemInfo` по флагу `isMetaEnhancerConvertor`.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Конвертация метапредмета с предварительной проверкой
```lua
local metaInfo = avatar.GetItemMetaInfo( itemId )
local itemInfo = avatar.GetItemInfo( instrumentId )

if metaInfo and metaInfo.isMetaEnchancer and itemInfo and itemInfo.isMetaEnhancerConvertor then
    avatar.ConvertMetaEnhancer( itemId, instrumentId )
end
```
::: info Описание примера
В примере сначала извлекается метаинформация улучшителя и обычная информация инструмента. Затем проверяется наличие необходимых флагов `isMetaEnchancer` и `isMetaEnhancerConvertor`. Только при успешном прохождении проверок происходит конвертация.
:::

## Смотрите также
- [avatar.GetItemMetaInfo](function.avatar.GetItemMetaInfo)
- [avatar.GetItemInfo](function.avatar.GetItemInfo)
- [itemLib.GetMetaInfo](function.itemLib.GetMetaInfo)