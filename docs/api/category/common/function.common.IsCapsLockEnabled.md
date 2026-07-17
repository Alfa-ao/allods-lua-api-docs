# common.IsCapsLockEnabled
Возвращает текущее состояние клавиши CapsLock.

## Описание
```lua
common.IsCapsLockEnabled(): boolean
```
Функция возвращает логическое значение, указывающее на текущее состояние клавиши CapsLock. Для получения состояния других клавиш применяется функция `common.IsKeyEnabled`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `boolean` — `true`, если клавиша CapsLock активна в момент вызова, и `false` в противном случае.

## Примеры
### Проверка и вывод состояния CapsLock
```lua
LogInfo( common.IsCapsLockEnabled() )
```

## Смотрите также
- [common.IsKeyEnabled](common.IsKeyEnabled)