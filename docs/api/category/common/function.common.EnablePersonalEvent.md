# common.EnablePersonalEvent
Включает обработку персонального события для конкретной пары «событие : объект».

## Описание
```lua
common.EnablePersonalEvent( sysEventName: string, object: ObjectId )
```
Функция включает формирование и передачу персонального события клиентом для указанного объекта. Применимо исключительно к специальным событиям:
- `EVENT_HEALING_RECEIVED`
- `EVENT_UNIT_DAMAGE_RECEIVED`
- `EVENT_DEVICE_DAMAGE_RECEIVED`
- `EVENT_MANA_RECEIVED`
- `EVENT_OBJECT_BUFFS_CHANGED`
- `EVENT_OBJECT_BUFF_ADDED`
- `EVENT_OBJECT_BUFF_REMOVED`
- `EVENT_OBJECT_BUFF_CHANGED`
- `EVENT_OBJECT_HEALTH_CHANGED`
- `EVENT_OBJECT_MANA_CHANGED`

Данные события передаются клиентом только для тех объектов, для которых хотя бы один аддон включил персональное событие на конкретную пару «событие : объект».

::: warning Замечание
Ручное управление персональными событиями может привести к неожиданным эффектам. Допускается только в хорошо протестированном коде в целях оптимизации для случаев с высокой степенью покрытия события фильтрами. Например, если аддон отслеживает бафы на всех объектах вокруг, то можно зарегистрировать `EVENT_OBJECT_BUFF_ADDED` без фильтров, через данную функцию добавить все соответствующие объекты и иметь единую точку входа.
:::

::: warning Замечание
Таблица персональных событий является глобальной (общей для всего интерфейса). При регистрации события из списка выше без фильтров оно может приходить для объектов, которые данный аддон не активировал (но активировал кто-то другой).
:::

::: warning Замечание
На один аддон для одной пары «событие : объект» счетчик персональных событий должен находиться в диапазоне 0-5, глобально 0-250.
:::

## Список параметров
- **`sysEventName`** (`string`)
Название включаемого события.
- **`object`** (`ObjectId`)
Идентификатор объекта, для которого включается персональное событие.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Включение отправки события для аватара
```lua
common.EnablePersonalEvent( "EVENT_OBJECT_BUFF_ADDED", avatar.GetId() )
```
::: info Описание примера
В примере включается передача персонального события `EVENT_OBJECT_BUFF_ADDED` для главного персонажа. Идентификатор объекта получается с помощью функции `avatar.GetId()`.
:::

## Смотрите также
- [common.DisablePersonalEvent](common.DisablePersonalEvent)
- [avatar.GetId](avatar.GetId)
- `EVENT_HEALING_RECEIVED`
- `EVENT_UNIT_DAMAGE_RECEIVED`
- `EVENT_DEVICE_DAMAGE_RECEIVED`
- `EVENT_MANA_RECEIVED`
- `EVENT_OBJECT_BUFFS_CHANGED`
- `EVENT_OBJECT_BUFF_ADDED`
- `EVENT_OBJECT_BUFF_REMOVED`
- `EVENT_OBJECT_BUFF_CHANGED`
- `EVENT_OBJECT_HEALTH_CHANGED`
- `EVENT_OBJECT_MANA_CHANGED`