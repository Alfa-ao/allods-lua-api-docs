# avatar.GetUnlocksInCategory
Возвращает список идентификаторов доступных возможностей (анлоков) главного игрока в заданной категории.
## Описание
```lua
avatar.GetUnlocksInCategory( unlockCategoryId: UnlockCategoryId ): table
```
Функция извлекает и возвращает индексированную с единицы таблицу, содержащую уникальные идентификаторы всех доступных возможностей (анлоков) главного игрока, относящихся к указанной категории.

## Список параметров
- **`unlockCategoryId`** (`UnlockCategoryId`)
Идентификатор типа категории возможностей (анлоков), для которой необходимо получить список доступных элементов.

## Возвращаемые значения
Возвращает таблицу (`table`), содержащую идентификаторы (`ObjectId`) возможностей. Индексация элементов в таблице начинается с единицы.

## Примеры
### Перебор всех категорий и вывод названий доступных возможностей
```lua
for _, unlockCategoryId in ipairs( avatar.GetUnlockCategories() ) do
    LogInfo( unlockCategoryId:GetInfo().name )
    for _, unlockId in ipairs( avatar.GetUnlocksInCategory( unlockCategoryId ) ) do
        local info = avatar.GetUnlockInfo( unlockId )
        LogInfo( info.name )
    end
end
```
::: info Описание примера
Выполняется перебор всех доступных категорий возможностей, полученных через `avatar.GetUnlockCategories()`. Для каждой категории выводится её название, после чего извлекается список доступных в ней возможностей с помощью `avatar.GetUnlocksInCategory()`. Для каждого идентификатора запрашивается подробная информация через `avatar.GetUnlockInfo()` и выводится название возможности.
:::

## Смотрите также
- [avatar.GetUnlockCategories](avatar.GetUnlockCategories)
- [avatar.GetUnlockInfo](avatar.GetUnlockInfo)