# ValuedTextSafe:HasObjects

Проверяет наличие объектов в тексте.

## Описание

```lua
ValuedTextSafe:HasObjects(): boolean
```

Функция проверяет наличие в тексте объектов, обозначенных тегом `<o>`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если текст содержит объекты, и `false` в противном случае.

## Примеры

### Проверка наличия объектов

```lua
if IsVt( object.desc ) and object.desc:HasObjects() then -- (HELP) IsVt
    LogInfo( "Need handle mouseover" )
end
```