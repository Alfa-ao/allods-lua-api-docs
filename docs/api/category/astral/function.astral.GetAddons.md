# astral.GetAddons
Возвращает список идентификаторов всех аддонов в астрале, упорядоченный по их сложности.

## Описание

```lua
astral.GetAddons(): table
```

Функция извлекает и возвращает таблицу с идентификаторами всех аддонов, находящихся в астрале. Элементы таблицы отсортированы в порядке возрастания сложности аддонов. Индексация элементов в возвращаемой таблице начинается с единицы.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблицу, содержащую идентификаторы (`ObjectId`) аддонов. Индексация элементов в таблице начинается с единицы.

## Примеры

### Получение и перебор списка аддонов

```lua
local addons = astral.GetAddons()
for i, objectId in ipairs( addons ) do
    local addonInfo = astral.GetAddonInfo( objectId )
    if addonInfo then
        local name = addonInfo.name
    end
end
```

## Смотрите также

- [astral.GetAddonInfo](/api/category/astral/function.astral.GetAddonInfo)