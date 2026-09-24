---
outline: deep
title: AddonBase
description: Документация по базовому функционалу аддонов AddonBase.lua
---

# AddonBase.lua

## Общее описание

`AddonBase.lua` - это скрипт, предоставляющий базовый общий функционал для аддонов. Он включает в себя расширение и модификацию стандартной библиотеки Lua, систему кэширования ресурсов (тексты, текстуры, звуки), а также продвинутую систему логирования и отладки.

### Подключение в UIAddon

```xml
<?xml version="1.0" encoding="UTF-8"?>
<UIAddon>
	<ScriptFileRefs>
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
- `GetEWs()` - алиас на `common.GetEmptyWString` (оптимизирован, возвращает статический экземпляр).
- `GetEVt` / `CreateVt` - алиасы на `common.CreateValuedText`.
- `GetEVo` - алиас на `common.CreateValuedObject`.



## Расширения стандартной библиотеки

### math

- `math.sign( num )` - возвращает знак числа (`1` или `-1`).
- `math.round( num, [limit = 0], [cutoff = false] )` - округление до `limit` знаков. Если `cutoff = true`, знаки отбрасываются вместо округления.
- `math.clamp( num, [min = num], [max = num] )` - ограничение числа диапазоном `[min:max]`.
- `math.wrap( num, min, max )` - зацикливание числа в диапазоне `[min:max]` (деление по модулю).

### table

- `table.isempty( tab )` - проверка таблицы на пустоту.
- `table.size( tab )` - количество ключей в таблице.
- `table.map( tab )` - "переворачивает" таблицу (ключ <-> значение).
- `table.imap( tab )` - аналог `table.map`, только для array-ключей.
- `table.minn( tab )` - минимальный числовой ключ.
- `table.maxn2( tab )` - максимальный числовой ключ (учитывает все, не только положительные).
- `table.append( tab, arg1, [arg2] )` - аналог `table.insert`, но вставляет все элементы из переданной таблицы.
- `table.normalize( tab )` - сдвигает индексацию таблицы с 0 на 1.
- `table.denormalize( tab )` - сдвигает индексацию таблицы с 1 на 0.
- `table.index( tab, ... )` - безопасное получение вложенного значения `tab[arg1][arg2]...`.
- `table.newindex( tab, ... )` - безопасная запись вложенного значения `tab[arg1][arg2]... = argN`.
- `table.getcount( tab, entry, [equal] )` - подсчет вхождений `entry`.
- `table.igetcount( tab, entry, [equal] )` - аналог для array-ключей.
- `table.search( tab, entry, [equal] )` - полный перебор, возвращает `true, key` или `false`.
- `table.isearch( tab, entry, [equal] )` - аналог для array-ключей.
- `table.binsearch( tab, entry, [less], [equal] )` - бинарный поиск по отсортированной таблице (индексация с 1).
- `table.getrandom( tab )` - случайная пара ключ/значение.
- `table.igetrandom( tab )` - аналог для array-ключей.
- `table.traverse( tab, mutator )` - рекурсивный обход с заменой значений через `mutator(k, v)`.
- `table.issubtable( tab, any )` - является ли `any` подмножеством `tab`.
- `table.isequal( tab1, tab2 )` - глубокое сравнение таблиц (без учета метатаблиц).

### string

- `string.escape( str )` - экранирование спецсимволов регулярных выражений Lua.
- `string.split( str, [separators], [noEscape] )` - разбиение строки по сепараторам (по умолчанию пробельные символы).

#### Пример использования бинарного поиска

```lua
local sortedArray = { 10, 20, 30, 40, 50 }
local found, key, value = table.binsearch( sortedArray, 30 )

if found then
    LogInfo( "Найдено по ключу: " .. key .. ", значение: " .. value )
else
    LogInfo( "Не найдено. Место для вставки: " .. key )
end
```



## Глобальные функции

### Управление аддоном

- `ReloadAddon()` - перезагружает текущий аддон.

### Работа с текстом

- `ValidateText( text )` - валидирует текст. Если невалиден, возвращает пустую строку (или сообщение об ошибке в debug-режиме).
- `JoinTextValues( values, [glueFormatWString], [iter] )` - склеивает массив текстов (`WString`, `ValuedText`, `ValuedObject`) в один `ValuedText`.

### Кэширование ресурсов

Все функции кэширования принимают `sysGroup` (по умолчанию `"Common"`), `sysName` и опциональный флаг `optional` (если `true`, отсутствие ресурса не вызывает ошибку).

- `GetAddonText( sysGroup, sysName, [optional] )` - получить текст из группы аддона.
- `GetStateText( sysGroup, sysName, [optional] )` - получить текст из группы стейта.
- `GetAddonTexture( sysGroup, sysName, [optional] )` - получить текстуру из группы аддона.
- `GetStateTexture( sysGroup, sysName, [optional] )` - получить текстуру из группы стейта.
- `GetAddonSound( sysGroup, sysName, [optional] )` - получить звук из группы аддона.
- `GetStateSound( sysGroup, sysName, [optional] )` - получить звук из группы стейта.

### Итераторы

- `sortpairs( tab, [comp] )` - аналог `pairs` с детерминированным (отсортированным) порядком обхода.
- `zpairs( tab )` - аналог `ipairs`, но для индексации с 0.



## Логирование и отладка

Данные функции доступны при наличии `FromWs` (в пользовательских аддонах) или в режиме отладки.

### Логирование

- `advtostring( val, [flat], [brief] )` - преобразует любой тип данных в "красивую" читаемую строку.
- `LogInfo( ... )` - вывод в лог с уровнем `INFO`.
- `LogWarning( ... )` - вывод в лог с уровнем `WARNING`.
- `LogError( ... )` - вывод в лог с уровнем `ERROR`.
- `LogInfoTS( ... )` - вывод `INFO` с запоминанием метки времени.
- `LogInfoTN( ... )` - вывод `INFO` с дельтой времени с последнего `TS`/`TN`.
- `LogMemoryUsage()` - вывод информации о потреблении памяти.
- `LogTrace()` - вывод Lua-стектрейса.

### Отладочные сущности (только для исходного кода)

- `DEBUG_BYPASS_ASSERTS` *(boolean)* - если `true`, `assert`/`error` не прерывают выполнение, а только пишут лог.
- `print` - алиас на `LogInfo`.
- `error( format, ... )` - переопределенная ошибка, поддерживает форматирование через `%s` (все аргументы конвертируются через `advtostring`).
- `assert( check, format, ... )` - переопределенный ассерт с поддержкой форматирования.