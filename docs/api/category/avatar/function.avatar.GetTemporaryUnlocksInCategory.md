# avatar.GetTemporaryUnlocksInCategory
Возвращает список идентификаторов временных возможностей (анлоков), имеющихся у главного игрока, в указанной категории.

## Описание
```lua
avatar.GetTemporaryUnlocksInCategory( unlockCategoryId: UnlockCategoryId ): table
```
Функция извлекает и возвращает индексированную с единицы таблицу, содержащую уникальные идентификаторы временных возможностей (анлоков), которые доступны главному игроку в заданной категории.

## Список параметров
- **`unlockCategoryId`** (`UnlockCategoryId`)
Идентификатор типа категории возможностей (анлоков), для которой необходимо получить список активных временных разблокировок.

## Возвращаемые значения
Возвращает таблицу (`table`), индексированную с единицы, содержащую идентификаторы (`ObjectId`) временных возможностей. Если в указанной категории нет доступных временных возможностей, возвращается пустая таблица.

## Примеры
### Перебор всех категорий и вывод названий временных возможностей
```lua
for _, unlockCategoryId in ipairs( avatar.GetTemporaryUnlockCategories() ) do
    LogInfo( unlockCategoryId:GetInfo().name )
    for _, unlockId in ipairs( avatar.GetTemporaryUnlocksInCategory( unlockCategoryId ) ) do
        local info = avatar.GetUnlockInfo( unlockId )
        LogInfo( info.name )
    end
end
```
::: info Описание примера
В примере сначала извлекается список всех доступных категорий временных возможностей с помощью `avatar.GetTemporaryUnlockCategories()`. Затем для каждой категории вызывается функция `avatar.GetTemporaryUnlocksInCategory()`, чтобы получить список идентификаторов анлоков внутри неё. Для каждого полученного идентификатора запрашивается подробная информация через `avatar.GetUnlockInfo()`, после чего название возможности выводится в лог.
:::

## Смотрите также
- [avatar.GetTemporaryUnlockCategories](avatar.GetTemporaryUnlockCategories)
- [avatar.GetUnlockInfo](avatar.GetUnlockInfo)