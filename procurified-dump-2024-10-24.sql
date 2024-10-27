--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0 (Debian 17.0-1.pgdg120+1)
-- Dumped by pg_dump version 17.0 (Debian 17.0-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: app_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.app_user (
    id integer NOT NULL,
    first_name character varying(255) NOT NULL,
    surname character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255) NOT NULL,
    password_salt character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.app_user OWNER TO postgres;

--
-- Name: app_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.app_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.app_user_id_seq OWNER TO postgres;

--
-- Name: app_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.app_user_id_seq OWNED BY public.app_user.id;


--
-- Name: swapi_request; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.swapi_request (
    id integer NOT NULL,
    query character varying(255) NOT NULL,
    response json NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    last_updated timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.swapi_request OWNER TO postgres;

--
-- Name: swapi_request_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.swapi_request_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.swapi_request_id_seq OWNER TO postgres;

--
-- Name: swapi_request_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.swapi_request_id_seq OWNED BY public.swapi_request.id;


--
-- Name: app_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_user ALTER COLUMN id SET DEFAULT nextval('public.app_user_id_seq'::regclass);


--
-- Name: swapi_request id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.swapi_request ALTER COLUMN id SET DEFAULT nextval('public.swapi_request_id_seq'::regclass);


--
-- Data for Name: app_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.app_user (id, first_name, surname, email, password_hash, password_salt, created_at) FROM stdin;
1	Francois	Laubscher	francoislaubscher@hotmail.com	1b69664870b73f0e6aa0ee21cd36ab02175d8800e626b177e08cea34a32c069a	82ee45b629e3189f666fa2d8b793b1ab	2024-10-27 10:53:59.486059
\.


--
-- Data for Name: swapi_request; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.swapi_request (id, query, response, created_at, last_updated) FROM stdin;
1	skywalker	[{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"https://swapi.dev/api/planets/1/","films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/6/"],"species":[],"vehicles":["https://swapi.dev/api/vehicles/14/","https://swapi.dev/api/vehicles/30/"],"starships":["https://swapi.dev/api/starships/12/","https://swapi.dev/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"https://swapi.dev/api/people/1/"},{"name":"Anakin Skywalker","height":"188","mass":"84","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"41.9BBY","gender":"male","homeworld":"https://swapi.dev/api/planets/1/","films":["https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/","https://swapi.dev/api/films/6/"],"species":[],"vehicles":["https://swapi.dev/api/vehicles/44/","https://swapi.dev/api/vehicles/46/"],"starships":["https://swapi.dev/api/starships/39/","https://swapi.dev/api/starships/59/","https://swapi.dev/api/starships/65/"],"created":"2014-12-10T16:20:44.310000Z","edited":"2014-12-20T21:17:50.327000Z","url":"https://swapi.dev/api/people/11/"},{"name":"Shmi Skywalker","height":"163","mass":"unknown","hair_color":"black","skin_color":"fair","eye_color":"brown","birth_year":"72BBY","gender":"female","homeworld":"https://swapi.dev/api/planets/1/","films":["https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/"],"species":[],"vehicles":[],"starships":[],"created":"2014-12-19T17:57:41.191000Z","edited":"2014-12-20T21:17:50.401000Z","url":"https://swapi.dev/api/people/43/"}]	2024-10-27 10:54:04.368196	2024-10-27 10:54:04.368196
2	darth	[{"name":"Darth Vader","height":"202","mass":"136","hair_color":"none","skin_color":"white","eye_color":"yellow","birth_year":"41.9BBY","gender":"male","homeworld":"https://swapi.dev/api/planets/1/","films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/6/"],"species":[],"vehicles":[],"starships":["https://swapi.dev/api/starships/13/"],"created":"2014-12-10T15:18:20.704000Z","edited":"2014-12-20T21:17:50.313000Z","url":"https://swapi.dev/api/people/4/"},{"name":"Darth Maul","height":"175","mass":"80","hair_color":"none","skin_color":"red","eye_color":"yellow","birth_year":"54BBY","gender":"male","homeworld":"https://swapi.dev/api/planets/36/","films":["https://swapi.dev/api/films/4/"],"species":["https://swapi.dev/api/species/22/"],"vehicles":["https://swapi.dev/api/vehicles/42/"],"starships":["https://swapi.dev/api/starships/41/"],"created":"2014-12-19T18:00:41.929000Z","edited":"2014-12-20T21:17:50.403000Z","url":"https://swapi.dev/api/people/44/"}]	2024-10-27 10:54:10.703315	2024-10-27 10:54:10.703315
\.


--
-- Name: app_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.app_user_id_seq', 1, true);


--
-- Name: swapi_request_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.swapi_request_id_seq', 2, true);


--
-- Name: app_user app_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_user
    ADD CONSTRAINT app_user_pkey PRIMARY KEY (id);


--
-- Name: swapi_request swapi_request_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.swapi_request
    ADD CONSTRAINT swapi_request_pkey PRIMARY KEY (id);


--
-- Name: ix_app_user_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_app_user_email ON public.app_user USING btree (email);


--
-- Name: ix_swapi_request_query; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_swapi_request_query ON public.swapi_request USING btree (query);


--
-- PostgreSQL database dump complete
--

