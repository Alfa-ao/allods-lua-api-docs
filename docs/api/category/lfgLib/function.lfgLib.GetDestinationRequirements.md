# lfgLib.GetDestinationRequirements

Извлекает требования для входа в целевую локацию.

## Описание

```lua
lfgLib.GetDestinationRequirements( destinationId: LfgDestinationId ): table | nil
```

Извлечение и возврат таблицы с условиями, необходимыми для входа в указанную локацию. Описание требований: [RequirementsTable](adfawefwae).

## Список параметров

- **`destinationId`** (`LfgDestinationId`) - Уникальный идентификатор целевой локации.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией о требованиях или `nil`, если данные отсутствуют.

- **`requirements`** (`RequirementsTable`) - список условий для входа.

## Примеры

### Получение первого требования для входа

```lua
local reqs = lfgLib.GetDestinationRequirements( destinationId )
local firstRequirement = nil

if reqs then
    local req = reqs.requirements[0]
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

В примере извлекаются требования для указанной локации. Если таблица требований существует, происходит обращение к первому элементу списка. Проверяется наличие вложенных условий, и при их наличии извлекается дочерний элемент. В итоге в переменную записывается системная причина первого найденного требования.

:::

## Смотрите также

- [RequirementsTable](sdfadf)