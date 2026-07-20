# EditLineSafe:SetGlobalClasses

Задает оформление для всего EditLine через список CSS-классов.

## Описание

```lua
EditLineSafe:SetGlobalClasses( classNames: table )
```

Функция задает оформление для всего элемента EditLine путем применения указанного списка CSS-классов.

## Список параметров

- **`classNames`** (`table`) - Список CSS-классов. Таблица строк (`string` или `WString`), индексация начинается с `1`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Применение CSS-классов к EditLine

```lua
local names = {}
names[1] = "RedColor"
names[2] = "Font20"
wtEditLine:SetGlobalClasses( names )
```