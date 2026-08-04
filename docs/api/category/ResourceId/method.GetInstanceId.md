# ResourceId:GetInstanceId

Возвращает уникальный идентификатор объекта.

## Описание

```lua
ResourceId:GetInstanceId(): light userdata | nil
```

Функция возвращает уникальный идентификатор объекта. Метод реализован для всех типов `ResourceId` и для `WidgetSafe` (базовый тип для виджетов). Уникальный идентификатор объекта имеет тип `light userdata`. Гарантируется, что один и тот же объект всегда имеет один и тот же уникальный идентификатор.

::: warning Замечание
Для одного и того же объекта его представления в виде обычного идентификатора (`full userdata`) могут отличаться, то есть один и тот же объект может представляться различными идентификаторами с точки зрения сравнения на равенство операторами Lua.
:::

::: warning Замечание
Уникальный идентификатор (`light userdata`) не может быть использован для непосредственного доступа к объекту через функции Lua API. Для этого необходимо использовать его обычный идентификатор (`full userdata`).
:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `light userdata` | `nil` - уникальный идентификатор или `nil` в случае ошибки.

## Примеры

### Сравнение и использование уникальных идентификаторов

```lua
local isWidgetsEqual = widget1:GetInstanceId() == widget2:GetInstanceId()
local isSpellsEqual = spellResourceId1:GetInstanceId() == spellResourceId2:GetInstanceId()

local index = {}
index[widget1:GetInstanceId()] = widget1
index[widget2:GetInstanceId()] = widget2

function GetWidgetById(instanceId)
    return index[instanceId]
end

local isKnownWidget = GetWidgetById(widget:GetInstanceId()) ~= nil
```

::: info Описание примера
В примере демонстрируется сравнение уникальных идентификаторов виджетов и ресурсов заклинаний, а также использование `light userdata` в качестве ключей в таблице для быстрого поиска объектов по их идентификаторам.
:::