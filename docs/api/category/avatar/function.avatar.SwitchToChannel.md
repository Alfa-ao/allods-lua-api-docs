# avatar.SwitchToChannel
Отправляет команду на смену игрового канала зоны.

## Описание
```lua
avatar.SwitchToChannel( channelIndex: number )
```
Функция отправляет запрос на сервер для переключения аватара на указанный игровой канал внутри текущей зоны. Успешное выполнение операции приводит к перемещению персонажа на выбранный канал. Информация об актуальных каналах и текущем состоянии передается через событие `EVENT_MAP_CHANNELS_INFO_CHANGED`.

## Список параметров
- **`channelIndex`** (`number`)
Индекс выбранного канала для переключения.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Переключение на следующий доступный канал
```lua
local channelsInfo = avatar.GetChannelsInfo()
if channelsInfo then
    local nextChannel = channelsInfo.currentChannel + 1
    if not channelsInfo[nextChannel] then
        nextChannel = 0
    end
    avatar.SwitchToChannel( nextChannel )
end
```
::: info Описание примера
В примере запрашивается информация о доступных каналах с помощью функции `avatar.GetChannelsInfo`. Если данные успешно получены, вычисляется индекс следующего канала. Если следующий индекс выходит за пределы таблицы, выбирается нулевой канал. Затем отправляется команда на переключение с помощью функции `avatar.SwitchToChannel`.
:::

## Смотрите также
- [avatar.GetChannelsInfo](avatar.GetChannelsInfo)
- [EVENT_MAP_CHANNELS_INFO_CHANGED](events.map#event-map-channels-info-changed)