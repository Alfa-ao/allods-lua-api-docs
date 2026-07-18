# cartographer.GetMapModifierValuedObject
Формирует и возвращает новый экземпляр ValuedObject для модификатора карты.

## Описание
```lua
cartographer.GetMapModifierValuedObject( mapModifierId: MapModifierId ): ValuedObject
```
Функция создает и возвращает новый экземпляр `ValuedObject`, связанный с указанным модификатором карты. 

Возвращаемый объект обладает следующими характеристиками:
- Тип объекта — `VAL_OBJ_TYPE_MAP_MODIFIER`.
- Текст — имя модификатора карты.
- Изображение — иконка модификатора карты.
- `Id` (`MapModifierId`) — идентификатор ресурса модификатора карты.

::: warning Замечание
Поскольку `ValuedObject` представляет собой `userdata`, Lua работает с такими объектами по ссылке, а не по значению.
:::

## Список параметров
- **`mapModifierId`** (`MapModifierId`)
Идентификатор модификатора карты, для которого необходимо получить объект.

## Возвращаемые значения
Возвращает `ValuedObject` — новый экземпляр объекта, содержащий информацию о модификаторе карты.

## Примеры
### Получение объекта модификатора карты
```lua
local mapModifiers = cartographer.GetCurrentMapModifiers()
local valuedObject = mapModifiers[0] and cartographer.GetMapModifierValuedObject( mapModifiers[0] )
```
::: info Описание примера
В примере сначала извлекается список текущих модификаторов карты с помощью `cartographer.GetCurrentMapModifiers()`. Затем проверяется наличие первого элемента в списке, и если он существует, вызывается `cartographer.GetMapModifierValuedObject()` для получения соответствующего `ValuedObject`.
:::

## Смотрите также
- [MapModifierId](MapModifierId)
- [cartographer.GetCurrentMapModifiers](cartographer.GetCurrentMapModifiers)
- [EVENT_UNIT_DAMAGE_RECEIVED](events#event-unit-damage-received)