# mount.IsStableExist
Проверяет наличие конюшни у главного игрока.

## Описание
```lua
mount.IsStableExist(): boolean
```
Функция возвращает логическое значение, указывающее на наличие конюшни у главного игрока.

## Список параметров
Функция не принимает параметров.

## Возвращаемые значения
`boolean` — `true`, если у главного игрока есть конюшня, и `false` в противном случае.

## Примеры
### Проверка наличия конюшни и получение информации о сытости активного маунта
```lua
if mount.IsStableExist() then
    local activeId = mount.GetActive()
    if activeId then
        local mountInfo = mount.GetInfo( activeId )
        if mountInfo then
            local maxTimeMs = mountInfo.satiationMs
            local currentTimeMs = mount.GetActiveSatiation()
        end
    end
end
```
::: info Описание примера
В примере сначала проверяется наличие конюшни у главного игрока. Если конюшня существует, извлекается идентификатор активного маунта. При наличии активного маунта запрашивается подробная информация о нем, из которой получаются значения максимального и текущего времени сытости.
:::

## Смотрите также
- [mount.GetActive](mount.GetActive)
- [mount.GetInfo](mount.GetInfo)
- [mount.GetActiveSatiation](mount.GetActiveSatiation)