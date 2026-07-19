# checkroomLib.IsOpened

Проверяет, открыт ли гардероб.

## Описание

```lua
checkroomLib.IsOpened(): boolean
```

Функция возвращает логическое значение, указывающее, открыт ли гардероб после вызова `checkroomLib.Open()`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

`boolean` - `true`, если гардероб открыт, иначе `false`.

## Примеры

### Проверка и закрытие гардероба

```lua
if checkroomLib.IsOpened() then
    checkroomLib.Close()
end
```