---
outline: deep
title: AddonBase
description: Документация по базовому функционалу аддонов AddonBase.lua
---

# AddonBase.lua

## Общее описание

`AddonBase.lua` - это скрипт, предоставляющий базовый общий функционал для аддонов. Он включает в себя расширение и модификацию стандартной библиотеки Lua, систему кэширования ресурсов (тексты, текстуры, звуки), а также продвинутую систему логирования и отладки.

::: tip Пояснение
`Только для исходного кода`

При использовании `<useCommonScripts>true</useCommonScripts>` в `UIAddon`, загружаются системные скрипты, которые скомпилированы без логики отладки.
То есть все что между `---BEGIN_DEBUG---` и  `---END_DEBUG---` выброшено.
:::

### Подключение в UIAddon

```xml
<?xml version="1.0" encoding="UTF-8"?>
<UIAddon>
	<ScriptFileRefs>
        <!-- AddonBaseUserMods
        Опциональная зависимость (алиасы).
            Некоторая чать функционала, как модифицированный LogInfo + advtostring, 
            требует алиасы для библиотеки AddonBase.lua
        -->
        <Item href="/Mods/SampleCommon/CoreScripts/AddonBaseUserMods.lua" />
        <!-- END -->
		<Item href="/Mods/SampleCommon/CoreScripts/AddonBase.lua" />
	</ScriptFileRefs>
</UIAddon>
```



## Глобальные переменные и алиасы

Данные сущности доступны всегда.

### Переменные

- `ADDON_NAME` `(string)` - системное имя аддона.
- `HALF_PI` `(number)` - `math.pi / 2`.
- `DOUBLE_PI` `(number)` - `math.pi * 2`.
- `TO_DEGREES` `(number)` - `180 / math.pi`.
- `TO_RADIANS` `(number)` - `math.pi / 180`.

### Алиасы типов и текста

- `IsWs( any )` - проверяет, является ли аргумент `WString`.
- `IsVt( any )` - проверяет, является ли аргумент `ValuedText`.
- `IsVo( any )` - проверяет, является ли аргумент `ValuedObjectLua`.
- `IsValidText` - алиас на `common.IsValidText`.
- `IntWs` - алиас на `common.FormatInt`.
- `FloatWs` - алиас на `common.FormatFloat`.
- `NumberWs` - алиас на `common.FormatNumber`.
- `GetIntWs` - алиас на `common.GetIntFromWString`.
- `GetEWs()` - алиас на `common.GetEmptyWString`. Оптимизировано, возвращает статическую переменную а не новый экземпляр пустого `WString`.
- `GetEVt` / `CreateVt` - алиасы на `common.CreateValuedText`.
- `GetEVo` - алиас на `common.CreateValuedObject`.

```lua
local name = ToWs( "Name" )
if IsWs( name ) then
    LogInfo( "Это WString:", FromWs( name ) )
end

local vt = GetEVt() -- пустой ValuedText. Рекомендуется использовать только без параметров.
local vtFmt = CreateVt { -- ValuedText с форматированием
    format = GetAddonText( nil, "COUNT_FORMAT" ),
    count = 5,
}
```


## Расширения стандартной библиотеки

### math

- `math.sign( num )` - возвращает знак числа `1` или `-1`.
- `math.round( num, [limit = 0], [cutoff = false] )` - округление до `limit` знаков после запятой. Если `cutoff = true`, знаки отбрасываются вместо округления.
- `math.clamp( num, [min = num], [max = num] )` - приведение числа диапазоном `[min:max]`, аналог `num = math.min( math.max( num, min ), max )`.
- `math.wrap( num, min, max )` - приведение числа в диапазоне `[min:max]` деление по модулю `max-min` со сдвигом на `min`.

```lua
LogInfo( math.sign( -5 ) ) -- -1
LogInfo( math.sign( 7 ) ) -- 1

LogInfo( math.round( 3.1415 ) )    -- 3
LogInfo( math.round( 3.1415, 2 ) ) -- 3.14
LogInfo( math.round( 3.1499, 2 ) ) -- 3.15
LogInfo( math.round( 3.1499, 2, true ) ) -- 3.14

LogInfo( math.clamp( 150, 0, 100 ) ) -- 100
LogInfo( math.clamp( -10, 0, 100 ) ) -- 0
LogInfo( math.clamp( 50,  0, 100 ) ) -- 50

LogInfo( math.wrap( 370, 0, 360 ) ) -- 10
LogInfo( math.wrap( -10, 0, 360 ) ) -- 350
```

### table

- `table.isempty( tab )` - Проверка таблицы на пустоту.
- `table.size( tab )` - Количество ключей в таблице.
- `table.map( tab )` - "Перевернуть" таблицу tab (ключ-значение -> значение-ключ).
- `table.imap( tab )` - Аналог `table.map`, учитываются только array ключи.
- `table.minn( tab )` - Возвращает минимальный числовой ключ в таблице `tab`, при отсутствии числовых ключей возвращает `nil`.
- `table.maxn2( tab )` - Возвращает максимальный числовой ключ в таблице `tab`, при отсутствии числовых ключей возвращает nil (учитывает все, не только положительные).
- `table.append( tab, arg1, [arg2] )` - Аналог `table.insert`, но вставляет все элементы из переданной таблицы.
- `table.normalize( tab )` - Сдвигает индексацию таблицы с `0` на `1`.
- `table.denormalize( tab )` - Сдвигает индексацию таблицы с `1` на `0`.
- `table.index( tab, "arg1", "arg2", ... )` - Безопасное получение вложенного значения `tab[arg1][arg2]...`. 
- `table.newindex( tab, ... )` - Безопасное запись вложенного значения `tab[arg1][arg2]... = argN`.
- `table.getcount( tab, entry, [equal] )` - Количество элементов `entry` в таблице `tab`. `equal = function( e1, e2 ) return e1 == e2 end`.
- `table.igetcount( tab, entry, [equal] )` - Аналог `table.getcount`, учитываются только array ключи.
- `table.search( tab, entry, [equal] )` - Поиск элемента `entry` в таблице `tab`. Возвращает `true, key` или `false`.
- `table.isearch( tab, entry, [equal] )` - Аналог `table.search`, учитываются только array ключи.
    - Возвращает пару значений: статус успеха и ключ по которому найдено значение (при отсутствии `nil`, при наличии нескольких - минимальный).
- `table.binsearch( tab, entry, [less], [equal] )` - Бинарный поиск элемента `entry` в таблице `tab`, `tab` должна иметь непрерывную индексацию с `1` и быть отсортирована. `less = function( e1, e2 ) return e1 < e2 end`.
    - Возвращает тройку значений: статус успеха и пару ключ-значение. 
    - Если элемент не найден, то ключ указывает на место куда можно вставить искомое значение с сохранением сортировки а значение - текущее по данному ключу.
    - Если элементов несколько, то пара ключ-значение указывает на произвольный.
- `table.getrandom( tab )` - Получить случайную пару ключ/значение из таблицы `tab`.
- `table.igetrandom( tab )` - Аналог `table.getrandom`, учитываются только array ключи.
- `table.traverse( tab, mutator )` - Рекурсивный обход таблицы `tab` с заменой нетабличных `val` на результат `mutator(k, v)`.
- `table.issubtable( tab, any )` - Является ли `any` таблицей-подмножеством `tab`.
    ::: warning ВАЖНО!
    Функция неустойчива к циклическим ссылкам на самих себя внутри таблиц.
    :::
- `table.isequal( tab1, tab2 )` - Сравнение таблиц по значению. Метатаблицы не обрабатываются.
    ::: warning ВАЖНО!
    Функция неустойчива к циклическим ссылкам на самих себя внутри таблиц.
    :::

```lua
local tab = { 9, 8, 7 }

local map = table.map( tab )   -- { 9 => 1, 8 => 2, 7 => 3 }
local imap = table.imap( tab ) -- то же, но только по array-ключам

LogInfo( table.size( tab ) )    -- 3
LogInfo( table.isempty( {} ) )  -- true
LogInfo( table.isempty( tab ) ) -- false

LogInfo( table.minn( { [5] = "a", [-2] = "b" } ) )  -- -2
LogInfo( table.maxn2( { [5] = "a", [-2] = "b" } ) ) -- 5

local dst = { 1, 2 }
table.append( dst, { 3, 4, 5 } ) -- dst = { 1, 2, 3, 4, 5 }

local zeroIdx = { [0] = "a", "b", "c" }
table.normalize( zeroIdx ) -- индексация теперь с 1

local oneIdx = { "a", "b", "c" }
table.denormalize( oneIdx ) -- индексация теперь с 0

local nested = { a = { b = { c = 42 } } }
LogInfo( table.index( nested, "a", "b", "c" ) ) -- 42
LogInfo( table.index( nested, "a", "x", "c" ) ) -- nil без ошибки

table.newindex( nested, "a", "b", "d", 100 )
-- nested.a.b.d == 100

local data = { 1, 2, 3, 2, 4, 2 }
LogInfo( table.getcount( data, 2 ) )  -- 3
LogInfo( table.igetcount( data, 2 ) ) -- 3

local found, key = table.search( data, 4 )    -- true, 5
local found2, key2 = table.isearch( data, 4 ) -- true, 5

local sorted = { 10, 20, 30, 40, 50 }
local ok, k, v = table.binsearch( sorted, 30 ) -- true, 3, 30
local ok2, k2 = table.binsearch( sorted, 35 )  -- false, 4 (ключ вставки)

local rk, rv = table.getrandom( data )
local rk2, rv2 = table.igetrandom( data )

local deep = { a = { b = 1 }, c = { d = { e = 2 } } }
table.traverse( deep, function( k, v )
    return type( v ) == "number" and v * 10 or v
end )
-- deep = { a = { b = 10 }, c = { d = { e = 20 } } }

local full = { x = 1, y = 2, z = 3 }
local sub  = { x = 1, z = 3 }
LogInfo( table.issubtable( full, sub ) )       -- true
LogInfo( table.isequal( { 1, 2 }, { 1, 2 } ) ) -- true
```

### string

- `string.escape( str )` - Получить копию строки с экранированными управляющими символами регулярных выражений.
- `string.split( str, [separators], [noEscape] )` - Разбить строку на массив подстрок по заданным сепараторам. Разбиение выполняется по регулярке: `"([^" .. separators .. "]+)"`
    - Параметры:
        - `str` - `string` - строка к разбиению.
        - `separators` - `string or nil` - символы по которым будет выполнено разбиение (по умолчанию - пробельные символы).
        - `noEscape` - `boolean or nil` - не экранировать управляющие символы в separators (по умолчанию `false`).
    - Возвращаемые значения:
        - `table of strings (from 1)` - результат разбиения: массив строк индексированный с `1`.

```lua
LogInfo( string.escape( "a.b+c" ) ) -- "a%.b%+c"

local parts = string.split( "one two   three" )
-- parts = { "one", "two", "three" }

local byComma = string.split( "a,b,c", "," )
-- byComma = { "a", "b", "c" }

-- noEscape = true позволяет использовать паттерны Lua
local digits = string.split( "a1b22c333", "%d+", true )
-- digits = { "a", "b", "c", "" }
```

## Глобальные функции

### Управление аддоном

- `ReloadAddon()` - перезагружает текущий аддон.

### Работа с текстом

- `ValidateText( text )` - валидирует текст. Если невалиден, возвращает пустую строку (или сообщение об ошибке в исходном коде).
- `JoinTextValues( values, [glueFormatWString], [iter] )` - Склеивает все тексты из `values` в один.
    - Параметры:
        - `values` - `table` - исходные тексты (`WString`, `ValuedText` или `ValuedObject` в любых комбинациях).
        - `glueFormatWString` - `WString or nil` - Формат склейки двух элементов.
            - Должен содержать r-теги `__accumulated_value` и `__added_value`.
            - По умолчанию берется из `StateRelatedTexts -> DefaultJoinTextValuesFormat`.
        `iter` - `function or nil` - Итератор по `values`, по умолчанию `ipairs`.
    - Возвращаемые значения:
        `ValuedText` - результирующий текст.

### Кэширование ресурсов

Все функции кэширования принимают `sysGroup` (по умолчанию `"Common"`), `sysName` и опциональный флаг `optional` (если `true`, отсутствие ресурса не вызывает ошибку).

- `GetAddonText( sysGroup, sysName, [optional] )` - Получить текст `sysName` из группы `аддона` `sysGroup` с кешированием.
- `GetStateText( sysGroup, sysName, [optional] )` - Получить текст `sysName` из группы `стейта` `sysGroup` с кешированием.
- `GetAddonTexture( sysGroup, sysName, [optional] )` - Получить текстуру `sysName` из группы `аддона` `sysGroup` с кешированием.
- `GetStateTexture( sysGroup, sysName, [optional] )` - Получить текстуру `sysName` из группы `стейта` `sysGroup` с кешированием.
- `GetAddonSound( sysGroup, sysName, [optional] )` - Получить простой звук `sysName` из группы `аддона` `sysGroup` с кешированием.
- `GetStateSound( sysGroup, sysName, [optional] )` - Получить простой звук `sysName` из группы `стейта` `sysGroup` с кешированием.

```lua
local vtCount = common.CreateValuedText {
    format = GetAddonText( "rus", "EXAMPLE_TEXT" ),
    count = 5,
}
```

### Итераторы

- `sortpairs( tab, [comp] )` - аналог `pairs` с детерминированным (отсортированным) порядком обхода. Параметр `comp` - специальная функция, которая принимает таблицу и возвращает функцию компаратор меньше для ключей таблицы.
- `zpairs( tab )` - аналог `ipairs`, но для индексации с `0`.



## Логирование и отладка

Данные функции доступны при наличии `FromWs`.

### Логирование

- `advtostring( val, [flat], [brief] )` - Преобразовать что угодно в "красивую" строку.
- `LogInfo( ... )` - вывод в лог с уровнем `INFO`.
- `LogWarning( ... )` - вывод в лог с уровнем `WARNING`.
- `LogError( ... )` - вывод в лог с уровнем `ERROR`.
- `LogInfoTS( ... )` - вывод `INFO` с запоминанием метки времени.
- `LogInfoTN( ... )` - вывод `INFO` с дельтой времени с последнего `TS`/`TN`.
- `LogMemoryUsage()` - вывод информации о потреблении памяти аддоном.
- `LogTrace()` - вывод Lua-стектрейса.

### Отладочные сущности (только для исходного кода)

- `DEBUG_BYPASS_ASSERTS` *(boolean)* - если `true`, `assert`/`error` не прерывают выполнение, а только пишут лог.
- `print` - алиас на `LogInfo`.
- `error( format, ... )` - переопределенная ошибка, поддерживает форматирование через `%s` (все аргументы конвертируются через `advtostring`).
- `assert( check, format, ... )` - переопределенный ассерт с поддержкой форматирования "Умный assert".