table raceClass
Таблица с информацией по расе-классу. Используется как составная часть для других описаний.

-- библиотека:
нет

-- объявление:
нет

-- параметры:
нет

-- возвращаемые значения:
таблица содержит следующие поля:
  sysName: string - служебное название (расы-класса)
  name: WString - локализованное название (расы-класса)
  description: WString - локализованное описание (расы-класса)
  sysClassName: string - служебное название класса
  className: WString - локализованное название класса
  sysRaceName: string - служебное название расы
  raceName: WString - локализованное название расы

-- примеры:
local raceClass = params.raceClass
LogInfo( "raceClass, sysName: ", raceClass.sysName )
LogInfo( "raceClass, name: ", raceClass.name )
LogInfo( "raceClass, description: ", raceClass.description )
LogInfo( "raceClass, sysClassName: ", raceClass.sysClassName )
LogInfo( "raceClass, className: ", raceClass.className )