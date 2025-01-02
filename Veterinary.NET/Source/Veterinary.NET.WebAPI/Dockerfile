FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Source/Veterinary.NET.WebAPI/Veterinary.NET.WebAPI.csproj", "Source/Veterinary.NET.WebAPI/"]
RUN dotnet restore "Source/Veterinary.NET.WebAPI/Veterinary.NET.WebAPI.csproj"
COPY . .
WORKDIR "/src/Source/Veterinary.NET.WebAPI"
RUN dotnet build "Veterinary.NET.WebAPI.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "Veterinary.NET.WebAPI.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Veterinary.NET.WebAPI.dll"]
