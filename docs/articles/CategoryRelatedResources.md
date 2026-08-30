# RelatedResources

Скриптовая система располагает рядом функций получения из приложения ресурсов следующих типов:

Доступны во всех типах аддонов:

- Text - текст, идентифицируется строкой (string), возвращается как WString

- Texture - текстура, идентифицируется строкой (string), возвращается как TextureId

- Sound - звук, идентифицируется строкой (string), возвращается как Sound2DId

- RelatedTextsLua - группа текстовых ресурсов

- RelatedTexturesLua - группа текстурных ресурсов

- RelatedSoundsLua - группа звуковых ресурсов

Доступны только во внутренних (не пользовательских) аддонах:

- Decal - декаль, идентифицируется строкой (string), имеет тип DecalObjectId

- VisAction - визуальный скрипт, идентифицируется строкой (string), имеет тип VisActionId

- VisObject - визуальный объект, идентифицируется строкой (string), имеет тип VisObjectId

- AliasVisObject - визуальный объект-обвязка (для коллекционных изданий и т.п.), идентифицируется строкой (string), имеет тип AliasVisObjectId

Большая часть значимых гейммеханических ресурсов (бафы, спеллы, абилки, рулы, ...)

По месту хранения ресурсы делятся на:

стэйтовые - подключаются в описании State (UIState) - доступны во всех аддонах стейта

ресурсы аддона - подключаются в описании аддона (UIAddon) - доступны только в конкретном аддоне

Пример файла UIRelatedTextures:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<UIRelatedTextures>
	<Items>
		<item>
			<name>Background</name>
			<resource href="Background.(UISingleTexture).xdb"/>
		</item>
	</Items>
</UIRelatedTextures>
```