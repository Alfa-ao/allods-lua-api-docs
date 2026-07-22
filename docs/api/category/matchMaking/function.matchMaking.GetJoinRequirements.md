# matchMaking.GetJoinRequirements
Извлекает требования на вход в инстанс-ивент.

## Описание

```lua
matchMaking.GetJoinRequirements( eventResourceId: InstancedEventResourceId ): table | nil
```

Функция извлекает требования на вход в инстанс-ивент и возвращает их в виде таблицы. Если требования отсутствуют, возвращается `nil`.

## Список параметров

- **`eventResourceId`** (`InstancedEventResourceId`) - Идентификатор ресурса соответствующего инстанс-ивента.

## Возвращаемые значения

Возвращает `table` | `nil`.
При наличии данных возвращается таблица со следующими полями:

- **`requirements`** (`RequirementsTable`) - Список условий.

## Примеры

### Извлечение первого доступного требования

```lua
local reqs = matchMaking.GetJoinRequirements( eventResourceId )
local firstRequirement = nil

if reqs then
    local req = reqs.requirements[ 0 ]
    if req then
        if req.type then
            req = req.childs[ 0 ]
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
В примере извлекаются требования для указанного инстанс-ивента. Затем проверяется наличие списка условий и извлекается первое доступное требование с учетом возможной вложенности.
:::

## Смотрите также

- [InstancedEventResourceId](types.InstancedEventResourceId)