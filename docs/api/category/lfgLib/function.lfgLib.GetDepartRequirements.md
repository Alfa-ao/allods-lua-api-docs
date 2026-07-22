# lfgLib.GetDepartRequirements

Извлекает требования для отправки в заданную локацию.

## Описание

```lua
lfgLib.GetDepartRequirements( destinationId: LfgDestinationId ): table | nil
```

Функция извлекает и возвращает таблицу с требованиями для отправки в указанную локацию.

Описание требований: [RequirementsTable](ewrqwer).

## Список параметров

- **`destinationId`** (`LfgDestinationId`) - Идентификатор целевой локации.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с требованиями для отправки или `nil`, если данные отсутствуют.

- **`requirements`** (`RequirementsTable`) - Список условий для отправки.

## Примеры

### Получение первого требования для отправки

```lua
local reqs = lfgLib.GetDepartRequirements( destinationId )
local firstRequirement = nil

if reqs then
    local req = reqs.requirements[0]
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
В примере извлекаются требования для отправки в локацию. Если таблица требований существует, происходит обращение к первому элементу списка `requirements`. Проверяется наличие вложенного типа `type`, и если он присутствует, извлекается первый дочерний элемент из `childs`. В итоге в переменную `firstRequirement` записывается системная причина `sysCause` первого найденного требования.
:::