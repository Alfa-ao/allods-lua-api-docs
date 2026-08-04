# remort.GetRequirements

Возвращает информацию о требованиях к использованию действий, связанных с ремортом.

## Описание

```lua
remort.GetRequirements(): table|nil
```

Функция возвращает информацию о требованиях к использованию действий, связанных с ремортом, в виде таблицы, или `nil` при отсутствии данных.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - информацию о требованиях к использованию действий, связанных с ремортом, или `nil`, если информация недоступна.

Если информация успешно получена, возвращается таблица со следующими полями:

- **`switchConditions`** (`RequirementsTable`) - список условий для перехода в другое тело.

- **`createConditions`** (`RequirementsTable`) - список условий для создания альтернативного тела.

- **`resetConditions`** (`RequirementsTable`) - список условий для сброса параметров имеющегося альтернативного тела.

## Примеры

### Получение требований к реморту

```lua
local reqs = remort.GetRequirements()
local firstRequirement = nil

if reqs then
    local req = reqs.switchConditions[0]
    if req then
        if req.type then
            req = req.childs[0]
            if req then
                firstRequirement = req.sysCause
            end
        else
            firstRequirement = req.sysCause
        end
    end
end
```

::: info Описание примера
В примере запрашиваются требования к использованию действий, связанных с ремортом. При успешном получении таблицы извлекается первое условие для перехода в другое тело. Если условие имеет тип, происходит обращение к его дочернему элементу для получения системной причины.
:::

## Смотрите также

- [RequirementsTable](/api/types/RequirementsTable.md)