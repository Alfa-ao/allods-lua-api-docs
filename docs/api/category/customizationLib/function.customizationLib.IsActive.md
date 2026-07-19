# customizationLib.IsActive
Определяет, активна ли кастомизация помещения или объекта.

## Описание
```lua
customizationLib.IsActive(): boolean
```
Функция возвращает `true`, если в данный момент активна кастомизация какого-либо помещения или объекта, и `false` в противном случае.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `boolean` - `true`, если в данный момент активна кастомизация помещения или объекта, и `false` в противном случае.

## Примеры
### Проверка состояния кастомизации
```lua
if customizationLib.IsActive() then
    customizationLib.UninstallItem()
end
```

## Смотрите также
- [customizationLib.UninstallItem](function.customizationLib.UninstallItem)