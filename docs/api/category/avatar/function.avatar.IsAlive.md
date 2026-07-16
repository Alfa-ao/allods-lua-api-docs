# avatar.IsAlive
Возвращает признак того, жив ли аватар.

## Описание
```lua
avatar.IsAlive(): boolean
```
Функция возвращает `boolean` — признак того, жив ли аватар. Если аватар умер или находится в чистилище, возвращается `false`. При изменении состояния аватара приходит событие `EVENT_AVATAR_ALIVE_CHANGED`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
`boolean` — `true`, если аватар жив, и `false`, если аватар умер или находится в чистилище.

## Примеры
### Проверка состояния аватара
```lua
if avatar.IsAlive() then
    LogInfo( "avatar alive" )
end
```

## Смотрите также
- [EVENT_AVATAR_ALIVE_CHANGED](events#event-avatar-alive-changed)