# mount.GetActiveSatiation
Возвращает время в миллисекундах до полного истощения вызванного ездового животного главного игрока.

## Описание
```lua
mount.GetActiveSatiation(): number
```
Функция возвращает целое число, представляющее собой время в миллисекундах, оставшееся до полного истощения сытости вызванного ездового животного главного игрока.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `number` — время в миллисекундах до полного истощения.

## Примеры
### Получение оставшегося времени сытости активного транспорта
```lua
local activeId = mount.GetActive()
if activeId then
  local mountInfo = mount.GetInfo( activeId )
  if mountInfo then
    local maxTimeMs = mountInfo.satiationMs
    local currentTimeMs = mount.GetActiveSatiation()
  end
end
```
::: info Описание примера
В примере сначала запрашивается идентификатор активного ездового животного через `mount.GetActive()`. При наличии вызванного животного извлекается его подробная информация с помощью `mount.GetInfo()`. Далее из полученной таблицы считывается максимальное время сытости (`satiationMs`), а текущее оставшееся время до истощения получается вызовом `mount.GetActiveSatiation()`.
:::

## Смотрите также
- [mount.GetActive](mount.GetActive)
- [mount.GetInfo](mount.GetInfo)