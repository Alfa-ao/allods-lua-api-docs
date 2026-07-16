# avatar.IsFastLevelUpAvailable
Проверяет доступность быстрой прокачки.
## Описание
```lua
avatar.IsFastLevelUpAvailable(): boolean
```
Функция возвращает логическое значение, указывающее на доступность быстрой прокачки.
## Список параметров
Параметры отсутствуют.
## Возвращаемые значения
Возвращает `boolean` — `true`, если быстрая прокачка доступна, и `false` в противном случае.
## Примеры
### Проверка доступности быстрой прокачки
```lua
if avatar.IsFastLevelUpAvailable() then
    LogInfo( "Fast level up available" )
end
```