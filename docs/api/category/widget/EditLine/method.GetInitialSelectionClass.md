# EditLineSafe:GetInitialSelectionClass

Возвращает класс, задающий исходное оформление выделенного текста в EditLine (из ресурсной системы).

## Описание

```lua
EditLineSafe:GetInitialSelectionClass(): WString
```

Функция возвращает класс, задающий исходное оформление выделенного текста в EditLine (из ресурсной системы).

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString`.

## Примеры

### Получение класса исходного оформления

```lua
local name = wtEditLine:GetInitialSelectionClass()
```