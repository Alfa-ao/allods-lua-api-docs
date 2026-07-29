 LuaFullDateTime

Полная информация о времени какого-либо события.

Таблица с полями:

y: number (integer) - год
m: number (integer) - месяц (начиная с 1)
d: number (integer) - день (начиная с 1)

h: number (integer) - час
min: number (integer) - минута
s: number (integer) - секунда
ms: number (integer) - миллисекунда

wday: number (enum ENUM_DayOfWeek...) - день недели, начиная с 1

month: number (enum ENUM_Month...) - месяц начала события с 0
sysMonth: string (enum "ENUM_Month...") - месяц начала события

overallMs: number (integer) - Unix time (общее время в миллисекундах прошедшее с 1-го января 1970 года)

См. ENUM_Month..., ENUM_DayOfWeek...