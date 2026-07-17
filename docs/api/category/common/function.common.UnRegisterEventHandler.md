# common.UnRegisterEventHandler
Отписывает указанный обработчик события аддона.

## Описание
```lua
common.UnRegisterEventHandler( eventHandler: function, sysEventName: string, filter: table | nil, unregisterPersonal: boolean | nil )
```
Функция отписывает указанный обработчик события аддона, удаляя его из списка зарегистрированных обработчиков для заданного события. Подробная информация о регистрации обработчиков и механизме работы событий представлена в описании функции `common.RegisterEventHandler`.

## Список параметров
- **`eventHandler`** (`function`)
Функция-обработчик, ранее зарегистрированная для обработки события.
- **`sysEventName`** (`string`)
Название системного события, от обработки которого производится отписка.
- **`filter`** (`table` | `nil`)
Таблица, содержащая параметры фильтрации сообщений. Если передано значение `nil`, фильтрация не применяется (по умолчанию).
- **`unregisterPersonal`** (`boolean` | `nil`)
Логическое значение, определяющее необходимость автоматической деактивации персональных событий (`personalEvents`), если это применимо. По умолчанию принимает значение `true`.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Отписка от события без фильтра и с фильтром
```lua
function OnEventSample( eventData )
end

function OnEventSampleMainPlayer( eventData )
end

common.UnRegisterEventHandler( OnEventSample, "EVENT_SAMPLE" )
common.UnRegisterEventHandler( OnEventSampleMainPlayer, "EVENT_SAMPLE", { unitId = avatar.GetId() } )
```
::: info Описание примера
В примере определяются две функции-обработчика. Первая функция `OnEventSample` отписывается от события `EVENT_SAMPLE` без применения дополнительных фильтров. Вторая функция `OnEventSampleMainPlayer` отписывается от того же события, но с использованием фильтра, ограничивающего обработку только для главного персонажа (по его идентификатору, полученному через `avatar.GetId()`).
:::

## Смотрите также
- [common.RegisterEventHandler](common.RegisterEventHandler)